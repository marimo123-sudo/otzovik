const search_btn = document.getElementById("search")
const profile_btn = document.getElementById("profile")


profile_btn.addEventListener("click", () => {
    console.log(1);
    window.location.href = 'profile/profile.html';
});


search_btn.addEventListener("click", () => {
    console.log(1);
    window.location.href = 'index.html';
});
