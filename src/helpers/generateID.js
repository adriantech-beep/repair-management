let ticketCounter = 1;
export function generateTicketNumber() {
  const timestamp = Date.now();
  return `${timestamp}-${ticketCounter++}`;
}
