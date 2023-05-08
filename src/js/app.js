export default function phoneNumberCorrection(phoneNumber) {
  const correctedNumber = phoneNumber.split(/[^\d]+/g).join('');
  return `+${correctedNumber.length === 11 ? '7'.concat(correctedNumber.slice(1)) : correctedNumber}`;
}
