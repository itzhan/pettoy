import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faPaw, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const FormContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;
`;

const FormTitle = styled.h2`
  color: #4A90E2;
  font-size: 1.5rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const TitleIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #4A90E2;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  &:focus {
    outline: none;
    border-color: #4A90E2;
  }
`;

const SubmitButton = styled.button`
  background-color: #4A90E2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
  &:hover {
    background-color: #357ABD;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    petType: '',
    date: '',
    time: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理表单提交
    console.log('预约信息:', formData);
    alert('预约已提交!');
  };

  return (
    <FormContainer>
      <FormTitle>
        <TitleIcon icon={faPaw} />
        在线预约
      </FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>服务类型</FormLabel>
          <FormSelect 
            name="serviceType" 
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">请选择服务类型</option>
            <option value="vaccination">宠物疫苗</option>
            <option value="grooming">宠物美容</option>
            <option value="checkup">常规体检</option>
            <option value="treatment">疾病治疗</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>宠物类型</FormLabel>
          <FormSelect 
            name="petType" 
            value={formData.petType}
            onChange={handleChange}
            required
          >
            <option value="">请选择宠物类型</option>
            <option value="dog">狗狗</option>
            <option value="cat">猫咪</option>
            <option value="bird">鸟类</option>
            <option value="other">其他宠物</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>预约日期</FormLabel>
          <InputWrapper>
            <FormInput 
              type="date" 
              name="date" 
              value={formData.date}
              onChange={handleChange}
              required 
            />
            <InputIcon icon={faCalendarAlt} />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <FormLabel>预约时间</FormLabel>
          <InputWrapper>
            <FormInput 
              type="time" 
              name="time" 
              value={formData.time}
              onChange={handleChange}
              required 
            />
            <InputIcon icon={faClock} />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <FormLabel>选择地点</FormLabel>
          <InputWrapper>
            <FormSelect 
              name="location" 
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">请选择医院地点</option>
              <option value="central">市中心分院</option>
              <option value="north">北区分院</option>
              <option value="south">南区分院</option>
              <option value="east">东区分院</option>
            </FormSelect>
            <InputIcon icon={faMapMarkerAlt} />
          </InputWrapper>
        </FormGroup>

        <SubmitButton type="submit">立即预约</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default AppointmentForm;
