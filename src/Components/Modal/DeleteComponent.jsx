import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import SnackbarComponent from './SnackbarComponent';
import { useContext } from 'react';
import {SnackbarContext} from './ModalContext';
import studentAPI from '../../API/student/StudentAPI';
import { connect } from "react-redux";
import { setListStudents } from '../../Redux/reducers/studentSlice';
import { selectPage } from '../../Redux/selectors/studentSelector';

function AlertDeleteModal(props) {
    const [open, setOpen] = React.useState(false);
    const SnackContext = useContext(SnackbarContext);

    const setStudent = props.setListStudents;

    const RefrestTable = async ()=>{
        const result = await studentAPI.getAll(props.page);
        setStudent(result.content);
    }

    const handleDelete = async ()=>{
        setOpen(false);
        SnackContext.setOpen(!SnackContext.open);
        const id = props.studentID
        await studentAPI.deleteByID(id);
        RefrestTable();
    }

    const handleClose = ()=>{
        setOpen(open)
    }

    return (
        <React.Fragment>
        <Button
            variant="outlined"
            color="danger"
            endDecorator={<DeleteForever />}
            onClick={() => setOpen(true)}
        >
            
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog variant="outlined" role="alertdialog">
            <DialogTitle>
                <WarningRoundedIcon />
                Confirmation
            </DialogTitle>
            <Divider />
            <DialogContent>
                Are you sure you want to discard all of your notes?
            </DialogContent>
            <DialogActions>
                <Button variant="solid" color="danger" onClick={handleDelete}>
                    Discard notes
                </Button>
                <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                Cancel
                </Button>
            </DialogActions>
            </ModalDialog>
        </Modal>
        </React.Fragment>
    );
}
const mapStateToProps = state =>{
    return{
        page: selectPage(state)
    }
}

export default connect(mapStateToProps,{setListStudents})(AlertDeleteModal);