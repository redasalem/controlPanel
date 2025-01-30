(function () {
    const tabs= document.querySelectorAll(".js-tabs");
    Array.from(tabs, tab => {
       const tabsLinks= tab.querySelectorAll(".js-tab-link");
       let currentActiveTab= tab.querySelector(".js-tab-link.is-active");
 
       const toggleTab= (toggleTabLink = currentActiveTab) => {
         currentActiveTab= toggleTabLink || currentActiveTab;
         toggleTabLink.classList.toggle("is-active");
 
         const toggledTabData= toggleTabLink.dataset.index;
         const toggledTabArea= tab.querySelector(`.js-tab-area[data-indexed=${toggledTabData}]`);
         toggledTabArea.classList.toggle("is-active");
       }
 
       if(!currentActiveTab){
           toggleTab(tabsLinks[0]);
       }
 
       tabsLinks.forEach(tabsLink => {
           tabsLink.addEventListener("click", function(event) {
               if(currentActiveTab === this) {
                   return;
               }
               if(currentActiveTab){
                   toggleTab();
               }
               toggleTab(this);
           })
       })
    })
 })();