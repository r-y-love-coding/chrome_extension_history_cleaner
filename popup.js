document.getElementById('deleteByChannel').addEventListener('click', () => {
  const channel = document.getElementById('channelInput').value.toLowerCase();
  chrome.history.search({ text: '', maxResults: 10000 }, (results) => {
    results.forEach(entry => {
      if (entry.url.includes('youtube.com') && entry.url.toLowerCase().includes(channel)) {
        chrome.history.deleteUrl({ url: entry.url });
      }
    });
    alert('History from this channel has been deleted.');
  });
});

document.getElementById('searchKeyword').addEventListener('click', () => {
  const keyword = document.getElementById('keywordInput').value.toLowerCase();
  const resultList = document.getElementById('resultList');
  resultList.innerHTML = '';
  chrome.history.search({ text: keyword, maxResults: 10000 }, (results) => {
    results.forEach(entry => {
      if (entry.url.includes('youtube.com')) {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" data-url="${entry.url}"> ${entry.title}`;
        resultList.appendChild(li);
      }
    });
  });
});

document.getElementById('deleteSelected').addEventListener('click', () => {
  const selected = document.querySelectorAll('#resultList input[type="checkbox"]:checked');
  selected.forEach(box => {
    const url = box.getAttribute('data-url');
    chrome.history.deleteUrl({ url });
  });
  alert('Selected history entries deleted.');
});
