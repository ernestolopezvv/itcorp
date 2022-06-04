import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import Select from 'react-select';
import ReadOnlyRow from './ReadOnlyRow';

const REGISTER_USER_COMPANY_URL = '/adminUsers';
const RELATION_USER_COMPANY_URL = '/companies/relationUserCompanyData';
const DELETE_RELATION_URL = '/deleteRelation';




const AdminUsers = ({ titleA, titleB, users = [], companies = [], multiSelect = false }) => {


    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [relationUserCompanyData, setRelationUserCompanyData] = useState([]);
    //

    const [userSelectedOption, setUserSelectedOption] = useState("");
    const [companySelectedOption, setCompanySelectedOption] = useState("");
    const [deletRow, setDeleteRow] = useState([])
    console.log(deletRow);



    const handleSendInfo = async (event) => {
        event.preventDefault()

        console.log(`Test ${userSelectedOption.UserId} y ${companySelectedOption.ID_Empresa}`);
        const userId = userSelectedOption.UserId;
        const companyId = companySelectedOption.ID_Empresa;
        // // Back End!
        try {
            const response = await axios.post(REGISTER_USER_COMPANY_URL, { userId, companyId });


            setSuccess(true);
        } catch (err) {
            console.log(err);
            if (!err.response.status) {
                setErrMsg('No server Response');
            } else if (err.response.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }

        }
    }

    useEffect(() => {

        const handleRelationUserCompanyData = async () => {
            try {
                const response = await axios.get(RELATION_USER_COMPANY_URL);
                setRelationUserCompanyData(response.data.recordset);
                console.log(response.data.recordset);

            } catch (err) {
                if (err.response) {

                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers)

                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }
        handleRelationUserCompanyData();


    }, [])


    const userHandleOnChange = Obj => {
        setUserSelectedOption(Obj);

    }

    const companyHandleOnChange = Obj => {

        setCompanySelectedOption(Obj);

    }

    const handleDeleteClick = async (event, object) => {
        event.preventDefault()
 
        try {
            setDeleteRow([object.UserId, object.ID_Empresa]);
            const userId = object.UserId;
            const companyId = object.ID_Empresa;
            console.log(userId, companyId);

            const response = await axios.post(DELETE_RELATION_URL, {userId ,companyId});

        } catch (err) {
            console.log(err);
            if (!err.response.status) {
                setErrMsg('No server Response');
            } else if (err.response.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
        }




    }

    return (
        // <div className='dd-wrapper'>
        //     <div tabIndex={0} className='dd-header' role='button' onKeyPress={() => toggleUsers(!openUsers)} onClick={() => toggleUsers(!openUsers)}>

        //         <div className='dd-header_title'>
        //             <p className='dd-header_title--bold'>{titleA}</p>
        //         </div>
        //         <div className='dd-header_action'>
        //             <p>{openUsers ? 'Close' : 'Open'}</p>
        //         </div>
        //     </div>
        //     {openUsers && (

        //         <ul className='dd-list'>

        //             {users.map(user => (
        //                 <li className='dd-list-item'>
        //                     <button type="button" onClick={() => handleUsersOnClick(user)} >

        //                         <span>{user.User}</span>
        //                         <span>{isUserInSelection(user) && 'Selected'}</span>
        //                     </button>

        //                 </li>
        //             ))}
        //         </ul>

        //     )}

        //     <div tabIndex={0} className='dd-header' role='button' onKeyPress={() => toggleCompanies(!openCompanies)} onClick={() => toggleCompanies(!openCompanies)}>

        //         <div className='dd-header_title'>
        //             <p className='dd-header_title--bold'>{titleB}</p>
        //         </div>
        //         <div className='dd-header_action'>
        //             <p>{openCompanies ? 'Close' : 'Open'}</p>
        //         </div>
        //     </div>
        //     {openCompanies && (

        //         <ul className='dd-list'>

        //             {companies.map(company => (
        //                 <li className='dd-list-item' >
        //                     <button type="button" onClick={() => handleCompaniesOnClick(company)} >

        //                         <span>{company.Nombre}</span>
        //                         <span>{isCompanieInSelection(company) && 'Selected'}</span>
        //                     </button>

        //                 </li>
        //             ))}
        //         </ul>

        //     )}

        //     <div>
        //         <button onClick={handleSendInfo}> Guardar </button>
        //     </div>


        // </div>

        <div className='app-container'>

            <h2> Agregar Acceso </h2>

            <Select defaultInputValue={userSelectedOption}
                placeholder="Seleccionar Usuario"
                isClearable={true}
                onChange={userHandleOnChange}
                options={users}
                getOptionLabel={option => option.User}
            />

            <Select defaultInputValue={companySelectedOption}
                placeholder="Seleccionar Empresa"
                isClearable={true}
                onChange={companyHandleOnChange}
                options={companies}
                getOptionLabel={option => option.Nombre}
            />
            <form onSubmit={handleSendInfo} >
                <button>Agregar</button>

                {/* <input type="text" name="User"  placeholder="Select User" />
                <input type="text" name="Nombre" placeholder="Select Empresa" /> */}

                <table>
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Empresa</th>
                            <th>Acciones</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {relationUserCompanyData.map((object) => (
                            <ReadOnlyRow object={object} handleDeleteClick={handleDeleteClick}/>

                        ))}
                    </tbody>
                </table>
            </form>

        </div>
    )



}



export default AdminUsers;
