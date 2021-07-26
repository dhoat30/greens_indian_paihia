import React from 'react'
import FormSection from './FormSection/FormSection'
import styled from 'styled-components'
function Contact() {
    return (
        <Container>
            <Flex className="row-container">
                <IFrameStyle src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.006807525732!2d174.08901185131654!3d-35.28095700105613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0bbad0724a591b%3A0x222c8dbfbb0e2257!2s96%20Marsden%20Road%2C%20Paihia%200200%2C%20New%20Zealand!5e0!3m2!1sen!2sid!4v1627312123850!5m2!1sen!2sid" style={{ border: '0' }} allowfullscreen="" loading="lazy"></IFrameStyle>
                <FormSection />
            </Flex>

        </Container>
    )
}
const Container = styled.section`
`
const Flex = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items : center ;
justify-content: center;
`
const IFrameStyle = styled.iframe`
padding: 100px 0;
display: block;
width: 100%;
height: 700px;
min-width: auto;

`
export default Contact
