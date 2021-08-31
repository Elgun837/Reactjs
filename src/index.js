import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import Collapse from './components/collapse';


function App() {
    return (
        <div className="container">
            <div className="row">

                <div className="card-group">
                    <div className="col">
                        <Collapse href="collapseExample1">
                            <Card cardTitle="Title-one"
                                image="https://picsum.photos/id/1/200/300" />
                        </Collapse>

                    </div>
                    <div className="col">
                        <Collapse href="collapseExample2">
                            <Card cardTitle="Title-one"
                                image="https://picsum.photos/id/10/200/300" />
                        </Collapse>

                    </div>
                    <div className="col">
                        <Collapse href="collapseExample3">
                            <Card cardTitle="Title-one"
                                image="https://picsum.photos/id/100/200/300" />
                        </Collapse>

                    </div>
                </div>
            </div>
        </div>

    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
    // document.querySelector('#root')
);