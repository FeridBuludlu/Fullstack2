
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import Addproduct from '../../../components/admin/Addproduct/Addproduct'
    
    const Add = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Add</title>
                </Helmet>
                <Addproduct/>
        </>
        )
    }
    
    export default Add
        