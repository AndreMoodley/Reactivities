import { Button, Image, Container, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container as='h1' inverted>
                <Header>
                    <Image size='massive' src='/assetss/logo.png' alt='logo' style={{marginBottom:12}}/>
                    Reactivities
                </Header>
                <Header as='h2' inverted content='Welcome to Reactivities'>
                    <Button as={Link} to='/activities' size='huge' inverted >
                        Take me to Activities
                    </Button>
                </Header>
            </Container>
        </Segment>
    )
}