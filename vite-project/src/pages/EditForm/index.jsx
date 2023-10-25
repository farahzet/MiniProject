import { useEffect, useState } from 'react'
import Logo from '../../assets/sepatu1.png'
import NavbarUser from '../../components/NavbarUser'

const EditForm = ({data, onSave}) => {

    const [NamaCustError, setNamaCustError] = useState('');
    const [AlamatError, setAlamatError] = useState('');
    const [QuantityError, setQuantityError] = useState('');
    const [TanggalError, setTanggalError] = useState('');
    const [AntarJemputError, setAntarJemputError] = useState('');
    const [ServiceError, setServiceError] = useState('');

    const [editForm, setEditForm] = useState({
        name: '',
        alamat: '',
        Quantity: '',
        date: '',
        AntarJemput: '',
        jam: '',
        service: '',
        deks:'',
    }); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm({
            ...editForm,
            [name]: value,
        });
    };

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        setNewForm({
            ...newform,
            [name]: checked,
        });
    };

    const handleEdit = (e) => {
        e.preventDefault();
        // dispatch(editform(newform))
        setNamaCustError('');
        setAlamatError('');
        setQuantityError('');
        setTanggalError('');
        setAntarJemputError('');
        setServiceError('');

        if (!newform.name || !namacustRegex.test(newform.productName)) {
            setNamaCustError('Nama produk hanya boleh diisi dengan huruf dan spasi');
        }

        if(!newform.alamat){
            setAlamatError('Harus diisi')
        }

        if(!newform.Quantity){
            setQuantityError('Harus diisi')
        }

        if(!newform.date){
            setTanggalError('Harus diisi')
        }

        if(!newform.AntarJemput){
            setAntarJemputError('Harus diisi')
        }

        if(!newform.service){
            setServiceError('Tidak Boleh Kosong')
        }
        onSave(editForm) 
    };

    return(
        <section className="PageForm">
            <NavbarUser/>

            <div className="content" style={{ marginTop: "65px" }}>
                <div id="content_left">
                <h1>Booking </h1>
                    <h1>Sekarang !!  </h1>
                    <hr size="10px"></hr>   
                </div>
                <div id="content_right">
                    <img src= {Logo} alt="Bootstrap" width={500} height={300} />
                </div>
            </div>

            <div id="kotak">
                <div id="kotak-content">
                    <div className="container">
                        <div className="pagetambah" style={{ margin: "0 auto", maxWidth: "95%" }}>
                            <div
                            className="forform"
                            style={{ minWidth: 450, maxWidth: "60%", margin: "0 auto" }}
                            >
                            <h3 style={{ textAlign: "left", marginTop: 40, marginBottom: "-16px" }}>
                                <b>Edit Order</b>
                            </h3>
                            <br />
                            <br />
                            <form onSubmit={handleEdit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nama Customer
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    value={editForm.name}
                                    placeholder="Masukkan Nama..."
                                    require=""
                                    onChange={handleInputChange}
                                />
                                <p id="NamaCustError" style={{ color: "red" }}>{NamaCustError}</p>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="alamat" className="form-label">
                                    Alamat
                                </label>
                                <input
                                    type="text"
                                    name="alamat"
                                    className="form-control"
                                    id="alamat"
                                    value={editForm.alamat}
                                    placeholder="Masukkan Alamat..."
                                    require=""
                                    onChange={handleInputChange}
                                />
                                <p id="AlamatError" style={{ color: "red" }}>{AlamatError}</p>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="Quantity" className="form-label">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    name="Quantity"
                                    className="form-control"
                                    id="Quantity"
                                    value={editForm.Quantity}
                                    placeholder="Masukkan Banyak..."
                                    require=""
                                    onChange={handleInputChange}
                                />
                                <p id="QuantityError" style={{ color: "red" }}>{QuantityError}</p>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="date" className="form-label">
                                    Hari/Tanggal
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    id="date"
                                    value={editForm.date}
                                    placeholder="Masukkan tanggal"
                                    require=""
                                    onChange={handleInputChange}
                                />
                                <p id="TanggalError" style={{ color: "red" }}>{TanggalError}</p>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="pilih" className="form-label">
                                    Antar Jemput
                                </label>
                                <br />
                                <div className="form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="AntarJemput"
                                    id="Ya"
                                    value="Ya"
                                    checked={editForm.AntarJemput === "Ya"}
                                    onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Ya
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="radio"
                                    name="AntarJemput"
                                    value="Tidak"
                                    id="Tidak"
                                    checked={editForm.AntarJemput === "Tidak"}
                                    onChange={handleInputChange}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Tidak
                                    </label>
                                </div>
                                <p id="AntarJemputError" style={{ color: "red" }}>{AntarJemputError}</p>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="jam" className="form-label">
                                    Jam&amp; PickUp
                                </label>
                                <input
                                    type="text"
                                    name="jam"
                                    className="form-control"
                                    id="jam"
                                    placeholder="Masukkan Jam PickUp (ex : Senin 27, 11.30)"
                                    require=""
                                    value={editForm.jam}
                                    onChange={handleInputChange}
                                />
                                </div>

                                <div className="mb-3">
                                <label htmlFor="JasaService" className="form-label">
                                    Jasa Service
                                </label><br></br>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name='JasaService'
                                    id="DeepClean"
                                    value="Deep Clean"
                                    onChange={handleCheckbox}
                                    />
                                    <label className="form-check-label" htmlFor="Deep Clean">
                                    Deep Clean
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name='JasaService'
                                    id="StandardClean"
                                    value="Standard Clean"
                                    onChange={handleCheckbox}
                                    />
                                    <label className="form-check-label" htmlFor="Standard Clean">
                                    Standard Clean
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name='JasaSevice'
                                    id="Kids Shoes"
                                    value="Kids Shoes"
                                    onChange={handleCheckbox}
                                    />
                                    <label className="form-check-label" htmlFor="Kids Shoes">
                                    Kids Shoes
                                    </label>
                                </div>
                                <p id="ServiceError" style={{ color: "red" }}>{ServiceError}</p>
                                </div>

                                <div className="mb-3">
                                <label htmlFor="deks" className="form-label">
                                    Detail Barang
                                </label>
                                <textarea
                                    className="form-control"
                                    type= "text"
                                    name="deks"
                                    id="deks"
                                    placeholder="Masukkan Detail Barang...."
                                    requireds=""
                                    style={{ minHeight: 150 }}
                                    value={editForm.deks}
                                    onChange={handleInputChange}
                                />
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="submit" className="btn btn-outline-info">
                                    Update
                                </button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default EditForm