import { useCallback, useMemo, useState } from 'react'
import './StudentManagement.css'

function StudentManagement(){
    const [showSearch,setShowSearch] = useState(false);
    
    const toggleSearch = useCallback(() => {
        setShowSearch(prevshow=>!prevshow);
      },[]) 
      const searchForm= useMemo(()=>(showSearch  && <div >
        <input className='search-input-student' />
        <a className='search-btn-student' href="#login">  tim kiem</a>
    </div>))
    return(
        <form>
            <div className='body_tb'>
                <main className="table">
                    <section className="table_header"><h1>
                        thong tin sinh vien</h1></section>
                
                            <div onClick={toggleSearch} className='searchbtn'>?</div>
                     
                         {
                            searchForm
                        }
                    <div className='addbtn'>
                        <a>
                        +
                        </a>
                    </div>
                    <section className="table_body">
                        <table className='content_tb'>
                            <thead>
                                <tr>
                                    <th>
                                        id
                                    </th>
                                    <th>
                                        ma sinh vien
                                    </th>
                                    <th>
                                        ten sinh vien
                                    </th>
                                    <th>
                                        ten lop
                                    </th>
                                    <th>
                                        nganh
                                    </th>
                                    <th colSpan={2}>
                                        tác vụ
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>72dctm20079</td>
                                    <td>Hoang Anh Tu</td>
                                    <td>72dctm22</td>
                                    <td>CNTT</td>
                                    <td ><a className='fix-order' href=''>sửa</a></td>
                                    <td ><a className='delete-order' href=''>xóa</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>72dctm20070</td>
                                    <td>Ta Quang Nam</td>
                                    <td>72dctm22</td>
                                    <td>CNTT</td>
                                    <td ><a className='fix-order' href=''>sửa</a></td>
                                    <td ><a className='delete-order' href=''>xóa</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
        </div>
        </form>
        
    )
}
export default StudentManagement