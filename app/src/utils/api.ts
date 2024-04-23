const baseUrl = 'http://localhost:4200/api/auth';
const signInUrl = `${baseUrl}/sign-in`;
const signUpUrl = `${baseUrl}/sign-up`;
const verifyEmailUrl = `${baseUrl}/verify-email`;

export async function signUp(email: string, password: string): Promise<boolean> {
  const response = await fetch(signUpUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const responseData = await response.json();
  if (responseData.message != null) {
    throw new Error(responseData.message);
  }
  return true;
}

export async function verifyEmail(email: string, code: string): Promise<boolean> {
  const response = await fetch(verifyEmailUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, code })
  });
  const responseData = await response.json();

  if (responseData.message != null) {
    throw new Error(responseData.message);
  }
  if (responseData.token == null) {
    throw new Error(responseData.message);
  }
  return responseData;
}

export async function signInUser(email: string, password: string): Promise<void> {
  try {
    const response = await fetch(signInUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const responseData = await response.json();

    if (responseData.token == null) {
      throw new Error(responseData.message);
    }
    return responseData;
  } catch (error) {
    throw error;
  }
}