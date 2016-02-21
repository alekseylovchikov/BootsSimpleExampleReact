'use strict';

class Navbar extends React.Component {
	render() {
        let navbarClass = '',
            homeActive = '',
            aboutActive = '';

        if (this.props.color == 'dark') {
            navbarClass = 'navbar navbar-inverse';
        } else {
            navbarClass = 'navbar navbar-default';
        }

        if (this.props.page == 'home') {
            homeActive = 'active';
        } else {
            aboutActive = 'active';
        }

		return (
			<div>
				<nav className={navbarClass}>
	                <div className="container-fluid">
	                    <div className="navbar-header">
	                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
	                        </button>
	                        <a className="navbar-brand" href="/">{this.props.brand}</a>
	                    </div>

	                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className={homeActive}><a href="#" onClick={this.props.clickHome}>Home</a></li>
                                <li className={aboutActive}><a href="#" onClick={this.props.clickAbout}>About</a></li>
	                        </ul>
	                    </div>
	                </div>
	            </nav>
			</div>
		);
	}
}

Navbar.defaultProps = { brand: "React App" };
Navbar.propTypes = { brand: React.PropTypes.string.isRequired };

class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron">
                <div className="container">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                    <p><a className="btn btn-primary btn-lg" href={this.props.link} role="button">Learn more &raquo;</a></p>
                </div>
            </div>
		);
	}
}

Jumbotron.defaultProps = {
    heading: "Welcome!",
    text: "Welcome to our new website with React.JS components...",
    link: "http://www.google.ru"
};

Jumbotron.propTypes = {
    heading: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired
};

class Home extends React.Component {
	render() {
		return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        Main Content
                    </div>
                </div>
            </div>
		);
	}
}

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        About Page
                    </div>
                </div>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                <hr />
                <footer>
                    <p>&copy; 2016 Company, Inc.</p>
                </footer>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'home'
        };
    }

    handleHomeClick() {
        this.setState({
            page: 'home'
        });
    }

    handleAboutClick() {
        this.setState({
            page: 'about'
        });
    }

	render() {
        let jumbotron = '',
            main = '';

        if (this.state.page == 'home') {
            jumbotron = <Jumbotron />;
            main = <Home />;
        } else {
            jumbotron = '';
            main = <About />;
        }

		return (
			<div>
				<Navbar
                    color="light"
                    page={this.state.page}
                    clickHome={this.handleHomeClick.bind(this)}
                    clickAbout={this.handleAboutClick.bind(this)} />
                {jumbotron}
                {main}
                <Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('main'));