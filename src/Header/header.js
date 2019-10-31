import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <label className="navbar-brand col-sm-3 col-md-2 mr-0"> Books List</label>
                <input type="button" className="btn btn-light" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" value="ADD Book"></input>
                <div className="collapse" id="collapseExample">

                <div className="container">
                 
                    <div className="card card-body">
                        <h5 className="text-center">Create new book</h5>
                        <input type="text" className="form-control" placeholder="Book name" ref="name" ></input>
                        <input type="text" className="form-control" placeholder="Book author" ref="author"></input>
                        <input type="text" className="form-control" placeholder="Book publish year" ref="year" ></input>
                        <input type="button" value="OK" className="btn btn-light" onClick={this.addBook} data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" ></input>
                    </div>
                </div>    
                </div>
            </nav>

        );
    }
    addBook = () =>{
     let name=this.refs.name.value;
     let author=this.refs.author.value;
     let year=this.refs.year.value;
     this.props.addHandler({name: name, author: author, year:year})
     
    }
}

export default Header;