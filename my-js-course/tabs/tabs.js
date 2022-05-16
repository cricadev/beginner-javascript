const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
    // & hide all tab panels
    tabPanels.forEach((panel) => (panel.hidden = true));
    // & mark all tabs as unselected and
    tabButtons.forEach((tab) => {
        tab.setAttribute('aria-selected', false);
        /* tab.ariaSelected = false */
    });
    // & mark the clicked tab as ariaSelected

    e.target.setAttribute('aria-selected', true);
    // & find the associated tabPanel and show it
    const { id } = e.currentTarget;

    //! METHOD 1
    // console.log(id);
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // console.log(tabPanel);
    // tabPanel.hidden = false;
    //! METHOD 2 - FIND IN THE ARRAY OF tabPanels
    const tabPanel = tabPanels.find(
        (panel) => panel.getAttribute('aria-labelledby') === id
    );
    console.log(tabPanel);
    tabPanel.hidden = false;
}
tabButtons.forEach((button) =>
    button.addEventListener('click', handleTabClick)
);