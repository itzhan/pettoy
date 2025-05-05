import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled.section`
  padding: 80px 0;
  background-color: #fff;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #f0834c;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactForm = styled.form`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 25px 0;
  color: #333;
`;

const ContactItems = styled.div`
  margin-bottom: 30px;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f0834c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 15px;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h4`
  margin: 0 0 5px 0;
  font-weight: 600;
`;

const ContactText = styled.p`
  margin: 0;
  color: #666;
`;

const DistributorTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0 0 15px 0;
  color: #333;
`;


const DistributorTag = styled.span`
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 0.9rem;
  color: #555;
  display: inline-flex;
  align-items: center;
`;

const GlobeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  color: #f0834c;
  font-size: 0.8rem;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #f0834c;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #f0834c;
  }
`;

const FormButton = styled.button`
  background-color: #f0834c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: #e67430;
  }
`;

const CatalogRequest = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const CatalogTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0 0 15px 0;
  color: #333;
`;

const CatalogText = styled.p`
  margin: 0 0 20px 0;
  color: #666;
`;

const CatalogButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #f0834c;
  border: 2px solid #f0834c;
  padding: 10px 20px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s;
  
  &:hover {
    background-color: #f0834c;
    color: white;
  }
`;

// 移除通知组件，因为我们现在使用mailto协议

const ContactUs = () => {
  // 表单状态管理
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  
  // 处理表单输入变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // 处理mailto链接打开
  const handleMailtoClick = (e) => {
    e.preventDefault();
    
    // 表单验证
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // 构建mailto链接
    const recipient = 'gracezhao1177@gmail.com'; // 您想要接收邮件的地址
    const subject = `Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company || 'Not specified'}
Email: ${formData.email}

Message:
${formData.message}
    `;
    
    // 创建并打开mailto链接
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  
  return (
    <ContactSection id="contact">
      <SectionContainer>
        <SectionTitle>Get In Touch</SectionTitle>
        
        <ContactGrid>
          <ContactInfo>
            <InfoTitle>How to Reach Us</InfoTitle>
            
            <ContactItems>
              <ContactItem>
                <ContactIcon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Email</ContactLabel>
                  <ContactText>gracezhao1177@gmail.com</ContactText>
                  <ContactText>18917879302@163.com</ContactText>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <FontAwesomeIcon icon={faPhone} />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactText>+86 151 9022 2399</ContactText>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel>Address</ContactLabel>
                  <ContactText>
                    Innovation West Road, Pudong New Area, Shanghai, China
                  </ContactText>
                </ContactDetails>
              </ContactItem>
            </ContactItems>
            
            <CatalogRequest>
              <CatalogTitle>Need Our Full Product Catalog?</CatalogTitle>
              <CatalogText>
               Please contact us to get comprehensive catalog with pricing, bulk discounts, 
                and customization options.
              </CatalogText>
            </CatalogRequest>
          </ContactInfo>
          
          <ContactForm onSubmit={handleMailtoClick}>
            <FormGroup>
              <FormLabel>Your Name *</FormLabel>
              <FormInput 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Smith" 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Company</FormLabel>
              <FormInput 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your Company Name" 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email *</FormLabel>
              <FormInput 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@company.com" 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message *</FormLabel>
              <FormTextarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your business and interests..." 
                required
              ></FormTextarea>
            </FormGroup>
            
            <FormButton type="submit">
              Send Message
            </FormButton>
            
            <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#666' }}>
              *This will open your default email client
            </p>
          </ContactForm>
        </ContactGrid>
      </SectionContainer>
    </ContactSection>
  );
};

export default ContactUs;
