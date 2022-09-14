import logo from './logo.svg';
import './App.css';

function App() {
  const fetchData = async ({ url, method, headers, body}) => {
        const response = await fetch(url, {
            method:      method,
            headers,
        });

        const result = await response.json();

        if (response.status !== 200) {
            throw new Error('data were not fetched.');
        }

        return result;
    };

  return (
    <div className="App">
      <header className="App-header">

<form
          className="form" >

        <label>
          url: <br />
          <input type="text" value='' onChange='' />
        </label>

<br />
<br />

<label>
          method: <br />
<select>
  <option selected value="GET">GET</option>
  <option value="POST">POST</option>
</select>
        </label>


<br />
<br />


<label>
          header: <br />
<textarea>
  Привет! Тут просто немного текста внутри тега textarea
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
