 let wallet = 12450;
        function addFunds() {
            wallet += 500;
            document.getElementById("totalBalance").innerText = "$" + wallet.toLocaleString() + ".00";
        }

        function buyStock(name) {
            alert("Success! You bought " + name + " shares.");
        }

        function changeTab(clickedId) {
            document.getElementById("nav-dash").classList.remove("active-link");
            document.getElementById("nav-port").classList.remove("active-link");
            document.getElementById("nav-mark").classList.remove("active-link");
            document.getElementById(clickedId).classList.add("active-link");
        }

        function searchTable() {
            let input = document.getElementById("searchBar").value.toUpperCase();
            let table = document.getElementById("stockTable");
            let rows = table.getElementsByTagName("tr");

            for (let i = 1; i < rows.length; i++) {
                let symbolCell = rows[i].getElementsByTagName("td")[0];
                if (symbolCell) {
                    let textValue = symbolCell.textContent || symbolCell.innerText;
                    rows[i].style.display = textValue.toUpperCase().includes(input) ? "" : "none";
                }
            }
        }