import type { Visitor } from '../types/types';
import { API_ENDPOINTS } from './apiEndpoints';

export async function fetchRegisterVisitor(visitorCredentials: Visitor) {
  try {
    const response: Response = await fetch(API_ENDPOINTS.REGISTER_VISITOR, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(visitorCredentials),
    });

    if (!response.ok) return false;

    return true;
  } catch (error) {
    console.error(error);
  }
}
