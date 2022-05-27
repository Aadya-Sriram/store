const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q="+ input +"&sa=X&rlz=1C5CHFA_enNZ948NZ948&biw=1366&bih=625&tbm=shop&sxsrf=ALiCzsb-imfAyt2QPmEpdtwzZv4NHTEZsA%3A1653636010319&ei=qnuQYvDtEs2Z-AbQr5KYCg&ved=0ahUKEwjw6u2Xkv_3AhXNDN4KHdCXBKMQ4dUDCAY&uact=5&oq=iphones&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgQIIxAnMgUIABCABDIFCAAQgAQyBwgAEIAEEAoyBQgAEIAEMgcIABCABBAKMgUIABCABDIFCAAQgAQyCwgAEIAEELEDEIMBMgUIABCABDoHCAAQsAMQGDoJCAAQsAMQChAYOg0IABAeEA8QsAMQCBAYOgcIIxDqAhAnOgsIrgEQygMQ6gIQJ0oECEEYAVDXBViyNmD3PWgDcAB4BIABrwGIAdYJkgEEMTEuM5gBAKABAbABBcgBA8ABAQ&sclient=products-cc"
}