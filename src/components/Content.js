import React from 'react'
import { Link } from 'react-router-dom'

export default function Content() {
  return (
      <>
      <div style={{overflow:'hidden'}}> 
      <div className="carousel-inner">
                <img src="https://source.unsplash.com/2400x800/?Doctor,health" className="d-block  w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing </h1>
                    <p>Some representative placeholder content for the first slide.</p>
                    <button className='btn btn-success '><h4>Start free online visit</h4></button>
                </div>
            </div>
        <div className=" container-fluid text-center bg-success p-2 text-dark bg-opacity-50">
            <h1 className="p-3 ">Easy Steps to get solutions</h1>
            <div className="row p-4 ">
                <div className="col-sm-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Search Doctor</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Make Appointment</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Get Solution</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Consultation</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
        <div className="row featurette">
        <div className="col-md-7 text-center p-5">
            <h2 className="featurette-heading mt-5">Any time and any where you can ask to our experts</h2>
            <p className="lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        
        <div className="col-md-5 ">
        <img src="https://source.unsplash.com/600x400?Doctor,health" className="d-block p-5 w-100" alt="..."/>

        </div>
        </div>
        <div className="container-fluid text-center bg-success p-2 text-dark bg-opacity-50 ">
        <div className="row ">
        <div className="col-md-7 order-md-2  text-center p-5 ">
            <h2 className="featurette-heading mt-5">Connect online and get best solution from our experties</h2>
            <p className="lead mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum accusantium corrupti impedit!</p>
        </div>
        <div className="col-md-5 order-md-1">
        <img src="https://source.unsplash.com/600x400?Doctor,health" className="d-block p-5 w-100" alt="..."/>
        </div>
        </div>
        </div>
        
        <div className="row featurette">
        <div className="col-md-7 text-center p-5 ">
            <h2 className="featurette-heading mt-5">Any time and any where you can ask to our experts </h2>
            <p className="lead mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam repellat laborum eius.</p>
        </div>
        <div className="col-md-5">
        <img src="https://source.unsplash.com/600x400?Doctor,health" className="d-block p-5 w-100" alt="..."/>

        </div>
        </div>
        <div className=" container-fluid text-center bg-success p-2 text-dark bg-opacity-50">
            <h1 className="mt-5">Our Products</h1>
            <div className="row m-5">
                <div className="col-sm-4 mb-3">
                    <div className="card ">
                    <img src="https://source.unsplash.com/600x400?Doctor,health" className="d-block p-3 w-100" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Your product name</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis qui dolores!</p>
                        <button className="btn btn-success d-grid gap-2 col-12 mx-auto">Buy Now </button>
                    </div>
                    </div>
                </div>
                
                <div className="col col-sm-4 mb-3">
                    <div className="card">
                    <img src="https://source.unsplash.com/600x400?Doctor,health" className="d-block p-3 w-100" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Your product name</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis qui dolores!</p>
                        <button className="btn btn-success d-grid gap-2 col-12 mx-auto">Buy Now </button>
                    </div>
                    </div>
                </div>
                <div className="col col-sm-4 mb-3">
                    <div className="card">
                    <img src="https://source.unsplash.com/600x400?Doctor,health" className="d-block p-3 w-100" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Your product name</h5>
                        <p className="card-text">This is a longer card Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <button className="btn btn-success d-grid gap-2 col-12 mx-auto">Buy Now </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" container-fluid text-center ">
            <h1 className="mt-5">Meet our expert doctors</h1>
            <div className="row m-5">
                <div className="col col-sm-3 mb-3">
                    <div className="card">
                    <img src="https://source.unsplash.com/600x400?Doctor,health" className="d-block p-3 w-100" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dr. Ayush khatun</h5>
                        <p className="card-text">This is a longer card with supporting text below as a </p>
                    </div>
                    </div>
                </div>
                
                <div className="col col-sm-3 mb-3">
                    <div className="card">
                    <img src="https://source.unsplash.com/600x400?Doctor,health" className="d-block p-3 w-100" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dr. Ayush khatun</h5>
                        <p className="card-text">This is a longer card with supporting text below as a </p>
                        
                    </div>
                    </div>
                </div>
                <div className="col col-sm-3 mb-3">
                    <div className="card">
                    <img src="https://source.unsplash.com/600x400?Doctor,health" className="d-block p-3 w-100" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dr. Ayush khatun</h5>
                        <p className="card-text">This is a longer card with supporting text below as a </p>
                    </div>
                    </div>
                </div>
                <div className="col col-sm-3 mb-3">
                    <div className="card">
                    <img src="https://source.unsplash.com/600x400?Doctor,health" className="d-block p-3 w-100" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dr. Ayush khatun</h5>
                        <p className="card-text">This is a longer card with supporting text below as a </p>
                    </div>
                    </div>
                </div>
            </div>
            <Link to="/team"><button className="btn btn-success mb-5">See All Doctors</button></Link>
        </div>
        <div className="container-fluid  text-white bg-dark p-2">
        <div className="row ">
        <div className="col-md-7 text-center p-5">
            <h4 className="mt-5">Book Appointment</h4>
            <h2 className="featurette-heading">Get 20% discount on your booking</h2>
            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        </div>
        
        <div className="col-md-5 ">
        <form>
            <h1>Sign Up</h1>
            
                <div className="row mb-3">
                    <div className="col">
                    <input type="text" className="form-control" placeholder="First name"/>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Last name"/>
                    </div>
                </div>
                <div className="row  mb-3">
                    <div className="col">
                    <input type="text" className="form-control" placeholder="First name"/>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Last name"/>
                    </div>
                </div>
                <div className="row  mb-3">
                    <div className="col">
                    <input type="text" className="form-control" placeholder="First name"/>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" placeholder="Last name"/>
                    </div>
                </div>
                
                <div className= " mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Adderess"/>
                </div>
                <div className="row mb-3">
                <div className="col">
                    <input type="text" className="form-control sm-3" id="city" placeholder='City' />
                </div>
                <div className="col">
                    <input type="text" className="form-control sm-3" id="zip" placeholder='Zipcode' />
                </div>
                </div>
                
                <button type="submit" className="btn btn-success">Submit  Form</button>
            </form>
        </div>
        </div>
        </div>
        
        <div className="container-fluid text-center p-5 bg-success p-2 text-dark bg-opacity-75 ">
            <h1>Reay to start online visit?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's</p>
            <button className="btn btn-success">Start free online visit</button>
            <div className="row p-5">
                <div className="col mb-3">
                    <h1>LOGO</h1>
                </div>
                <div className="col mb-3">
                    <h5>Home</h5>
                    <h5>How its work</h5>
                </div>
                <div className="col m-3">
                    <h5>Product</h5>
                    <h5>Our Team</h5>
                    <h5>FAQ</h5>
                </div>

            </div>
        </div>
      </div>
        
    
    </>
  )
}
