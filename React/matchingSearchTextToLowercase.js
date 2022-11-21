// Using this code make new code 

      let term = 'apple orange banana apple orange banana. app node_modules/sass-loader/dist';
      let search1 = 'app';
      let parts = term.split(search);
      console.log("parts", parts)
      return parts.map((item, i) => (
        <>{item && <strong>{item}</strong>}{(i !== parts.length - 1) ? search1 : null}</>
      ))



   // Make suggest text bold matching with search text 

    let termData = [
       { "title": "apple orange banana" },
       { "title": "upload app koro na kn???" },
        { "title": "range ban apple ana" },
        { "title": "Hello world" },
        { "title": "Hello no world" },
    ];
    let search = 'app';
    const matchData = termData?.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));

    let newArray = [];

    matchData.map(item => {
        return newArray.push(item.title.split(search))
    })

    return newArray.map((item, index) => (
        <>
            {item.map((second, i) => (
                <span onClick={() => alert(`"hey MR.", ${index}`)}>{second && <strong>{second}</strong>}{(i !== item.length - 1) ? search : null}</span>
            ))}
            <br />
        </>
    ))