
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function BackgroundImg() {
    return (
        <div>
           <div>
            <Card style={{ width: '100%', minHeight: "400px", backgroundColor: "#DEEED6"}} className="bg-dark text-black">
              <Card.Img style={{ height: "400px", width: "20%", float: "right" }} src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="Card Img"/>
               <Card.ImgOverlay style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px"}}>
                <Card.Text style={{fontSize: "2.5em", fontWeight: "bold" }}>
                  Order groceries for delivery <br /> or pickup today
                </Card.Text>
                <Card.Text style={{fontSize: "1em"}}>
                    Whatever you want from your local stores, brought right to your door.
                </Card.Text>
              <Form>
                    <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control size="lg" type="text" placeholder="   Enter your address                                         ->" />
                    </Form.Group>
                </Form>
                </Card.ImgOverlay>
            </Card>
        </div> 
        </div> 
    )
}

export default BackgroundImg