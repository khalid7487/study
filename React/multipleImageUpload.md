## How upload multiple image using in one array in react ?

**here i upload 6 image as thumb image for ecommerce backend systems**

**Work procedure:**

1. At first i make a array with six items ["Font", "Back", "Up","Down", "Right", "Left"]

2. Make a array  copy with six items ["Font", "Back", "Up","Down", "Right", "Left"]

3. const [imageData, setImageData] = useState(imageArray);

4. Then  loop through with image data into html sections  : 

 <span className="thum-img-section">

  {
     imageData.map((item, index) => (
         <div key={index} className='single-image'>
                 <input type="file" name='thumb_img' onChange={(e) => handleImageUpload(e, item)} />
                     {
                        imageArrayTwo.includes(item) ? <p>{item}</p> :
                           <img src={item} style={{ width:"100px" }} />
                    }
            </div>
    ))}

 </span>

5. handleImageUpload function and receive two items (e, item) then make new FileReader instance.

6. fileReader.onload = () => {
    const updatedImageArray = imageData.map((element, index) => {
                if (element === item) {
                    return fileReader.result;
                }
                return element;
    });
    setImageData(updatedImageArray);
}

7. then read file if (file) { fileReader.readAsDataURL(file) }


`here using map element set update  data mutable and set into fileReader.result and return element `