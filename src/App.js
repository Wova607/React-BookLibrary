import React, { Component } from 'react';
import './App.css';
import Header from '../src/Header/header';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: this.props.books, edBook: '', valueName: '', valueAuthor: '', valueYear: '' }

  }

  render() {
    return (

      <div>
        <Header addHandler={this.addHandler}></Header>
        <br></br><br></br><br></br>
        <div className="container">
          <div className="card-group">

            {this.state.books.map(b =>
              <div className="card" key={b.name + b.author}>
                <div className="card-body">
                  <h5 className="card-title">{b.name}</h5>
                  <h6 className="card-text">{b.author}</h6>
                  <p className="card-text">{b.year}</p>
                  <input type="button" className="btn btn-primary" value="Edite" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => this.editElement(b)}></input>

                  <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">Edite book</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">

                          <div className="form-group">
                            <input type="text" className="form-control" name="name" value={this.state.valueName} onChange={this.chgText}></input>
                            <br></br>
                            <input type="text" className="form-control" name="author" value={this.state.valueAuthor} onChange={this.chgText}></input>
                            <br></br>
                            <input type="text" className="form-control" name="year" placeholder={this.state.valueYear} onChange={this.chgText}></input>
                          </div>

                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.save}>Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>


                  <input type="button" className="btn btn-danger" value="Delete" onClick={() => this.delElement(b)}></input>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

    );
  }

  delElement = (book) => {
    let i = 0;
    var arr = this.state.books
    arr.forEach(element => {
      if (element === book) {
        arr.splice(i, 1)
      }
      i++;
    });
    this.setState({ books: arr })

  }

  addHandler = (newBook) => {
    this.state.books.push(newBook)
    this.setState({ books: this.state.books })
  }


  editElement = (bookEdit) => {
    this.state.edBook=bookEdit
    this.setState({ valueName: bookEdit.name })
    this.setState({ valueAuthor: bookEdit.author })
    this.setState({ valueYear: bookEdit.year })
  }

  chgText = (e) => {
    if (e.target.name === 'name') {
      this.setState({ valueName: e.target.value })
    }
    if (e.target.name === 'author') {
      this.setState({ valueAuthor: e.target.value })
    }
    if (e.target.name === 'year') {
      this.setState({ valueYear: e.target.value })
    }
  }



  save = () => {
    
    let j = 0;
    var oldarr = this.state.books
    oldarr.forEach(element => {
      if (element === this.state.edBook) {
        oldarr[j].name = this.state.valueName
        oldarr[j].author = this.state.valueAuthor
        oldarr[j].year = this.state.valueYear
        console.log(oldarr[j])
      }
      j++;
    });
    this.setState({ books: oldarr });
    
  }




}


export default App;
