import { API_ENDPOINTS } from './apiEndpoints';

export type Visitor = {
  username: string;
  email: string;
};

export async function fetchRegisterVisitor(visitorCredentials: Visitor) {
  const response = await fetch(API_ENDPOINTS.REGISTER_VISITOR, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(visitorCredentials),
  });

  const jsonResponse = response.json();

  console.log(jsonResponse);

  return jsonResponse;
}
