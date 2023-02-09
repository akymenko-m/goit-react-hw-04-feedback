import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
`;

export const Item = styled.li`
  font-size: 16px;
  font-weight: 600;
`;

export const ItemContent = styled.span`
  font-size: 20px;
  color: darkblue;
  text-shadow: 2px -2px 3px rgba(249, 253, 55, 0.5);
`;
