const form = document.getElementById('nameForm');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userName = document.getElementById('userName').value.trim();

  try {
    const response = await fetch('/api/get-name', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName })
    });

    const data = await response.json();

    if (!response.ok) {
      result.textContent = data.error || 'Request failed';
      return;
    }

    result.textContent = `${data.name} ${data.emoji}`;
  } catch (error) {
    result.textContent = 'Error contacting server';
  }
});