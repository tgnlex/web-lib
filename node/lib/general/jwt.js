import crypto from 'crypto';

const genJwtToken = () => {
  const newToken = crypto.randomBytes(32).toString('hex');
  console.log(newToken);
  return newToken;
}
