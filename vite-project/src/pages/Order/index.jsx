import { useState } from "react";
import NavbarUser from "../../components/NavbarUser";
import Logo from '../../assets/sepatu1.png'


const Order = () => {
    const [form, setForm] = useState([]);
    const [newform, setNewForm] = useState({
        name: '',
        alamat: '',
        Quantity: '',
        date: '',
        AntarJemput: '',
        jam: '',
        service: '',
        deks:'',
    });

    return(
        <section className="ListOrder">
            <NavbarUser/>
            <div className="content" style={{ marginTop: "65px" }}>
                <div id="content_left">
                <h1>Detail Order </h1>
                    <hr size="10px"></hr>   
                </div>
                <div id="content_right">
                    <img src= {Logo} alt="Bootstrap" width={500} height={300} />
                </div>
            </div><br></br>

            <div className="table-responsive" marginTop={100}>
                <table
                className="table"
                >
                <thead>
                    <tr style={{ textAlign: "center" }}>
                    <th scope="col">No</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Nama Customer</th>
                    <th scope="col">Antar Jemput</th>
                    <th scope="col">Service</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {form.map((order, index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{order.date}</td>
                            <td>{order.name}</td>
                            <td>{order.AntarJemput}</td>
                            <td>{order.service}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=> handleDelete(index)}>Delete</button>
                                <button className="btn btn-outline-primary">Edit</button>
                                {/* <button className="btn btn-info" onClick={() => handleClick(product.id)}>Detail</button> */}
                                <Link to={`/detail/${index}`} className="btn btn-info"> Detail</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
                </div>

        </section>
    )
}

export default Order