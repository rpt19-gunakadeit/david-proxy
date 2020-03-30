import './main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: 1,
            num: 1
        }
    }

    componentDidMount() {
        var path = window.location.pathname.split('/');
        var productId = path[2]; 
        var styleId = path[3]; 

        this.setState({
            productId
        })
    }

    test() {
        this.setState({
            num: ++this.state.num
        })
    }

    render() {
        return (
            <div>
                <nav className="ncss-container bg-white">
                    <section className="d-sm-h d-lg-b">
                        <div className="l-member-header border-nav-bottom bg-white ncss-row">
                            <div className="ncss-col-sm-12 prl0-sm">
                                <ul className="fl-sm-l d-sm-ib">
                                    <li className="border-nav-right d-sm-ib va-sm-t">
                                        <a href="https://www.nike.com/membership" className="prl7-sm pt2-sm pb2-sm nav-color-grey fs12-nav-sm d-sm-b" target="_self">
                                            Join Us
                                        </a>
                                    </li>
                                    <li className="border-nav-right d-sm-ib va-sm-t">
                                        <a href="https://www.nike.com/jordan" className="prl7-sm pt2-sm pb2-sm nav-color-grey fs12-nav-sm d-sm-b" target="_self">
                                            <i className="g72-jordan fs20-nav-sm">

                                            </i>
                                        </a>
                                    </li>
                                    <li className="border-nav-right d-sm-ib va-sm-t">
                                        <a href="https://www.nike.com/hurley" className="prl7-sm pt2-sm pb2-sm nav-color-grey fs12-nav-sm d-sm-b hover-color-black" target="_self">
                                            <i className="g72-hurley fs14-nav-sm"></i>
                                        </a>
                                    
                                    </li>
                                    <li className="border-nav-right d-sm-ib va-sm-t">
                                        <a href="https://www.nike.com/w/converse-akmjx" className="prl7-sm pt2-sm pb2-sm nav-color-grey fs12-nav-sm d-sm-b hover-color-black" target="_self">
                                            <i className="g72-converse fs12-nav-sm"></i>
                                        </a>
                                    
                                    </li>
                                </ul>
                            

                                <ul className="fl-sm-r d-sm-ib pr5-sm">
                                    <li className="d-sm-ib va-sm-m">
                                        <button class="nav-btn p0-sm prl3-sm pt2-sm pb2-sm fs12-nav-sm d-sm-b nav-color-grey" target="_self">
                                            <span>Join/Log In To Nike Member Profile</span>
                                        </button>
                                    </li>
                                    <li className="d-sm-ib">
                                        <a className="nav-color-grey prl4-sm pt2-sm pb2-sm fs12-nav-sm d-sm-b" href="https://www.nike.com/help">
                                            <span>
                                                Help
                                            </span>
                                        </a>
                                    </li>
                                    <li className="d-sm-ib pr1-sm">
                                        <a className="cart-button" href="https://www.nike.com/us/en/cart">
                                            <i className="g72-cart cart-icon">

                                            </i>
                                        </a>
                                    </li>
                                    <li className="d-sm-ib">
                                        <a>
                                            <svg height="15px" width="18px" fill="#111" viewBox="0 0 42 58" >
                                                <path d="M21 0C9.4 0 0 9.5 0 21.2 0 39.9 21 58 21 58s21-18.1 21-36.8C42 9.5 32.6 0 21 0zm0 31c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
                                            </svg>
                                            <span>United States</span>
                                        </a>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </section>


                    <section className="d-sm-b">
                        <div className="l-nav ncss-row border-nav-bottom">
                            
                            <div class="l-nav-brand">
                                <a href="https://www.nike.com" class="prl5-sm pt3-sm pb3-sm d-sm-ib fs24-nav-sm fs28-nav-lg">
                                    <i class="g72-swoosh"></i>
                                </a>
                            </div>
                            <div>
                            </div>

                            <div class="d-lg-b d-sm-h">
                                <ul class="ta-sm-c">
                                    <li class="d-sm-ib">
                                        <a class="nav-brand fs16-nav-sm prl5-sm pt6-sm pb6-sm nav-uppercase d-sm-ib va-sm-m" href="https://www.nike.com/w/new-3n82y">New Releases</a>
                                    </li>
                                    <li class="d-sm-ib">
                                        <a class="nav-brand fs16-nav-sm prl5-sm pt6-sm pb6-sm nav-uppercase d-sm-ib va-sm-m" href="https://www.nike.com/men">Men</a>
                                    </li>
                                    <li class="d-sm-ib">
                                        <a class="nav-brand fs16-nav-sm prl5-sm pt6-sm pb6-sm nav-uppercase d-sm-ib va-sm-m" href="https://www.nike.com/women">Women</a>
                                    </li>
                                    <li class="d-sm-ib">
                                        <a class="nav-brand fs16-nav-sm prl5-sm pt6-sm pb6-sm nav-uppercase d-sm-ib va-sm-m" href="https://www.nike.com/kids">Kids</a>
                                    </li>
                                    <li class="d-sm-ib">
                                        <a class="nav-brand fs16-nav-sm prl5-sm pt6-sm pb6-sm nav-uppercase d-sm-ib va-sm-m" href="https://www.nike.com/nike-by-you">Customize</a>
                                    </li>
                                    <li class="d-sm-ib">
                                        <a class="nav-brand fs16-nav-sm prl5-sm pt6-sm pb6-sm nav-uppercase d-sm-ib va-sm-m" href="https://www.nike.com/kids">Sale</a>
                                    </li>
                                </ul>
                            </div>

                            <div class=".l-nav-search">
                                <div></div>
                            </div>
                        </div>
                    </section>


                </nav>
                <div class="css-5x88d2 css-l8ohx9">
                    <div class="">

                    </div>

                </div>

                <Description test={this.test.bind(this)} productId={this.state.productId}/>
                {/* <div id="Description"></div> */}

                <div id="test">{this.state.num}</div>
                <div id="reviews-service"></div>
            </div>
        )
    }
}

export default App;



