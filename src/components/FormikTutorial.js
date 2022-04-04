import {ErrorMessage, useFormik} from 'formik';
const FormikTutorial = () =>{
    //managing state:
    //step 1: add initial values of each field. Object keys should be similar to name props of form
    //step 2: add onchange and value prop in each element of the form
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            channel:""
        },
        onSubmit:values=>{
            console.log("form data: ",values);
        },
        validate:values=>{

            let errors={};

            const {name, email, channel} = values;
            if(!name){
                errors.name="required"
            }
            if(!email){
                errors.email="required"
            }
            if(!channel){
                errors.channel="required"
            }
            return errors;
        }
    });

    // console.log("Formik: ", formik.values);
    console.log("Errors: ",formik.errors);
    //display error msgs only when user has interacted with it. Keep track of the visited fields using onBlur
    //and get the result using touched
    console.log("Visited Fields: ", formik.touched)

    return<>
    This is a Simple Form
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>

        <input 
        id="name" 
        name="name" 
        type="text"
        onChange={formik.handleChange} 
        value={formik.values.name}
        onBlur={formik.handleBlur}
        style={{width:200, margin:10}}/>
        {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div>:null}

        <br/>

        <label htmlFor="email">Email</label>
        <input 
        id="email" 
        name="email" 
        type="email" 
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        style={{width:200,  margin:10}}/>
         {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>:null}
        <br/>

        <label htmlFor="channel">Channel</label>
        <input 
        id="channel" 
        name="channel" 
        type="text" 
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.channel}
        style={{width:200,  margin:10}}/>
         {formik.errors.channel && formik.touched.channel? <div>{formik.errors.channel}</div>:null}
        <br/>
        <button type="submit">Submit</button>
    </form>
    </>
}
export default FormikTutorial;