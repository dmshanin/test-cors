import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const initialState = {
	url: 'http://back.shopandshow.ru/api/v2/slider/?id=1',
	method: 'GET',
	headers: "{'Content-Type': 'application/json'}",
	body: '',
}
const [ store, setStore ] = useState(initialState);
  const fetchData = async ({ url, method, headers, body}) => {
console.log('data', { url, method, headers, body});
	const params = body ? { body } : {};
        const response = await fetch(url, {
            method,
            headers,
		...params
        });

        const result = await response.json();

        if (response.status !== 200) {
            throw new Error('data were not fetched.');
        }

        return result;
    };

 const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setStore({
      [name]: value
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
	fetchData({ ...store }).then((res) => {
console.log('res', res)
setStore(initialState)
}).catch((err) => {
console.log('err', err)
setStore(initialState)
})
  }

if (!store) {
return null;
}

  return (
    <div className="App">
      <header className="App-header">

<form onSubmit={handleSubmit}
          className="form" >

        <label>
          url: <br />
          <input type="text" name="url" value={store.url} onChange={handleInputChange} />
        </label>

<br />
<br />

<label>
          method: <br />
<select name="method" value={store.method} onChange={handleInputChange}>
  <option value="GET">GET</option>
  <option value="POST">POST</option>
</select>
        </label>


<br />
<br />


<label>
          headers: <br />
<textarea name="headers" value={store.headers} onChange={handleInputChange}>

</textarea>
        </label>

<br />
<br />


<label>
          body: <br />
<textarea name="body" value={store.body} onChange={handleInputChange}>

</textarea>
        </label>

<br />
<br />

        <input type="submit" value="Отправить" />
      </form>

      </header>
    </div>
  );
}

export default App;
