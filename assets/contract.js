(()=>{'use strict';
const address=document.querySelector('#contract-address'),button=document.querySelector('#copy-contract'),status=document.querySelector('#contract-status');
button.addEventListener('click',async()=>{
  const value=address.textContent.trim();
  button.disabled=true;
  try {
    if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(value);
    status.textContent='CA copied';
  } catch {
    const selection=window.getSelection(),range=document.createRange();
    range.selectNodeContents(address);selection?.removeAllRanges();selection?.addRange(range);
    status.textContent='Select and copy the address above.';
  } finally {button.disabled=false;}
});
})();