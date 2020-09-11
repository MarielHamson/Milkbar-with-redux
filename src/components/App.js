import React from 'react';
import NavBar from './NavBar';
import MilkControl from './MilkControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function App() {
	return (
		<React.Fragment>
			<Container>
				<Row>
					<Col></Col>
				</Row>
				<NavBar />
				<MilkControl />
			</Container>
		</React.Fragment>
	);
}

export default App;
