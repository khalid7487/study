## Here i can optimize if else codnition 

**supose you have filter 8 fileds and you have to check which filed is empty if filed is empty a make border red else submit data to databse**

1. make a validationData object with every 8 fields and set false every elements. 
2. if all fields are full or not empty then data go to database or submit it to database.
3. else check which every check every 8 items is empty or not.
4. if empty make valdationData value change with the key value make it true.
5. then set it into formvalidation 


 let dataValidation = {
        p_name: false,
        product_id: false,
        description: false,
        discount: false,
        qty: false,
        product_category: false,
        price: false,
        delivery_charge: false,
        delivery: false
    }


const [validation, setValidation] = useState()




if (formData?.product_name?.trim() && formData?.product_id?.trim() && formData?.description?.trim() && formData?.discount?.trim()
            && formData?.qty?.trim() && formData?.product_category?.trim() && formData?.price?.trim()
            && formData?.delivery_charge?.trim() && formData?.delivery?.trim()) {

            console.log("all data are avaiable...")

} else {

 if (formData?.product_name?.trim() === '' || formData?.product_name?.trim() === undefined) {
                dataValidation['p_name'] = true;
}

 if (formData?.product_id?.trim() === '' || formData?.product_id?.trim() === undefined) {
                dataValidation['product_id'] = true;
 }

 if (formData?.description?.trim() === '' || formData?.description?.trim() === undefined) {
                dataValidation['description'] = true;
 }

if (formData?.discount?.trim() === '' || formData?.discount?.trim() === undefined) {
                dataValidation['discount'] = true;
 }

if (formData?.qty?.trim() === '' || formData?.qty?.trim() === undefined) {
                dataValidation['qty'] = true;
 }

if (formData?.product_category?.trim() === '' || formData?.product_category?.trim() === undefined) {
                dataValidation['product_category'] = true;
 }

if (formData?.price?.trim() === '' || formData?.price?.trim() === undefined) {
                dataValidation['price'] = true;
}

if (formData?.delivery_charge?.trim() === '' || formData?.delivery_charge?.trim() === undefined) {
                dataValidation['delivery_charge'] = true;
}

if (formData?.delivery?.trim() === '' || formData?.delivery?.trim() === undefined) {
                dataValidation['delivery'] = true;
}

setValidation(dataValidation);
}