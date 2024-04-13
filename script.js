sumIsZero(0);

// Sample menu data with submenus
const menuData = [
    {
        category: "HAIR CUTS",
        items: [
            { name: "Men Haircut", priceRS: 20 },
            { name: "Hair Cut", priceRS: 30 },
            { name: "Fade Cut", priceRS: 30 },
            { name: "Shoulder Length Hair Cut", priceRS: 30 },
            { name: "Triming Baby Cut", priceRS: 30 },
            { name: "Baby Fade Cut Only Round", priceRS: 30 },
        ],
    },
    {
        category: "HAIR STYLING",
        items: [
            { name: "Hair Styling", priceRS: 50 },
            { name: "Only Blow Dry Fiber Only", priceRS: 70 },
            { name: "Fiber Hair Styling", priceRS: 70 },
            { name: "Iron Styling Short Length ", priceRS: 70 },
            { name: "Iron Styling Long Length", priceRS: 70 },
        ],
    },
    {
        category: "BEARD CUTS",
        items: [
            { name: "Beard", priceRS: 50 },
            { name: "Stylish Beard", priceRS: 70 },
            { name: "Fade Beard French Cut", priceRS: 70 },
            { name: "Beard Machine", priceRS: 70 },
            { name: "Shave", priceRS: 70 },
            { name: "Disposible Razor Shave", priceRS: 70 },
            { name: "Steam Shave", priceRS: 70 },
        ],
    },
    {
        category: "Hair Technical",
        items: [
            { name: "Rebonding Above Shoulder", priceRS: 50 },
            { name: "Rebonding Waist Length", priceRS: 70 },
            { name: "Keratin Treatment Above Shoulder", priceRS: 70 },
            { name: "Keratin Treatment Waist Length", priceRS: 70 },
            { name: "Extenso Above Shoulder", priceRS: 70 },
            { name: "Extenso Waist Length", priceRS: 70 },
        ],
    },
    {
        category: "Hair Colour",
        items: [
            { name: "Hair Colour Keune", priceRS: 50 },
            { name: "Hair Colour Keune Beard", priceRS: 70 },
            { name: "Olivia Hair Colour", priceRS: 70 },
            { name: "Hair Beard Colour", priceRS: 70 },
            { name: "Just For Men Colour", priceRS: 70 },
            { name: "Farmaci Hair Colour", priceRS: 70 },
            { name: "Only Service", priceRS: 70 },
            { name: "Head Wash", priceRS: 70 },
        ],
    },
    {
        category: "Hair Treatment",
        items: [
            { name: "Simple Hair Mask", priceRS: 50 },
            { name: "Keune  Hair Mask", priceRS: 50 },
            { name: "Orgen Hair Mask", priceRS: 50 },
            { name: "Keratin Hair Mask", priceRS: 50 },
            { name: "Hair Sensol Mask", priceRS: 50 },
            { name: "Dandruf Hair Treatment", priceRS: 50 },
            { name: "Hair Polish", priceRS: 50 },
            { name: "Only Head Steam", priceRS: 50 },
        ],
    },
    {
        category: "WAX",
        items: [
            { name: "Face Wax Half", priceRS: 50 },
            { name: "Face Wax Full", priceRS: 50 },
            { name: "Ear Wax", priceRS: 50 },
            { name: "Nose Wax", priceRS: 50 },
            { name: "Face Threading", priceRS: 50 },
            { name: "Body Wax", priceRS: 50 },
        ],
    },
    {
        category: "SKIN CARE",
        items: [
            { name: "Simple Facial", priceRS: 50 },
            { name: "Skin Polish Face/Neck", priceRS: 50 },
            { name: "Cleaning/Scrub", priceRS: 50 },
            { name: "Whitning Facial", priceRS: 50 },
            { name: "Herbal Facial", priceRS: 50 },
            { name: "Herbal Acne Facial", priceRS: 50 },
            { name: "Dermacose Facial", priceRS: 50 },
            { name: "Glow Facial + Cleansing", priceRS: 50 },
            { name: "Golden Mask", priceRS: 50 },
            { name: "Black Mask", priceRS: 50 },
            { name: "Only Steam", priceRS: 50 },
            { name: "Nose Strip", priceRS: 50 },
            { name: "Glow Whitning Facial", priceRS: 50 },
        ],
    },
    {
        category: "Meni - Pedi",
        items: [
            { name: "Menicure", priceRS: 50 },
            { name: "Pedicure", priceRS: 50 },
            { name: "Meni - Pedi", priceRS: 50 },
            { name: "Hand Polish", priceRS: 50 },
        ],
    },
    {
        category: "Make-Up",
        items: [
            { name: "Grooming Make-Up", priceRS: 50 },
            { name: "Party Make-Up", priceRS: 50 },
        ],
    },
    {
        category: "MASSAGE",
        items: [
            { name: "Head Massage", priceRS: 50 },
            { name: "Shoulder Massage", priceRS: 50 },
            { name: "Head + Shoulder", priceRS: 50 },
        ],
    },
    {
        category: "Nikah Package",
        items: [
            { name: "Hearbal Facial", priceRS: 50 },
            { name: "Hair Cut", priceRS: 50 },
            { name: "Beard/Hair Styling", priceRS: 50 },
            { name: "Party Make-Up", priceRS: 50 },
        ],
    },
];


// Populate the menu with categories and submenus
const menuList = document.getElementById("menuList");
menuData.forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.classList.add("list-group-item", "font-weight-bold");
    categoryItem.style.backgroundColor = "#ebeceb";
    categoryItem.innerText = category.category;

    const submenu = document.createElement("ul");
    submenu.classList.add("list-group", "submenu", "d-none");

    category.items.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "product");
        listItem.style.backgroundColor = "#dedede";
        listItem.innerHTML = `
            ${product.name} - RS ${product.priceRS.toFixed(2)}
            <button style="border-color: #e5c266; background-color: #e5c266; color: black; font-weight: bold;" 
            class="btn btn-sm" onclick="addToInvoice('${product.name}', ${product.priceRS})">Add</button>
        `;
        submenu.appendChild(listItem);
    });

    categoryItem.appendChild(submenu);
    menuList.appendChild(categoryItem);

    categoryItem.addEventListener("click", () => {
        submenu.classList.toggle("d-none");
    });
});

// Function to add selected products to the invoice
window.addToInvoice = function (name, priceRS) {
    // Create a new row in the invoice table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${priceRS.toFixed(2)}</td>
        <button class="btn btn-danger" onclick="clearInvoice1()" style="float:right; cursor: pointer;">x</button>
    `;

    invoiceTable.appendChild(newRow);

    // Update the total amount in RS
    const currentTotalRS = parseFloat(totalAmount.innerText);
    const newTotalRS = currentTotalRS + priceRS;
    totalAmount.innerText = newTotalRS.toFixed(2);
    // totalAmount.innerText = calculateTotalWithDiscount();
    sumIsZero(newTotalRS);
};


// Function to Check if total is zero
function sumIsZero(val) {
    if(val == 0){
        $(document).ready(function() {
            // Hide the element with id "myDiv"
            $("#addDis").hide();
            $("#printInv").hide();
            $("#clrs").hide();
          });
    }
    else{
        $(document).ready(function() {
            // Hide the element with id "myDiv"
            $("#addDis").show();
            $("#printInv").show();
            $("#clrs").show();
          });
    }
}


// Function to toggle the display of the discount input
function toggleDiscountInput() {
    const discountInput = document.getElementById("discountInput");
    discountInput.style.display = discountInput.style.display === "none" ? "block" : "none";
}

// Function to calculate the total amount with discount
function calculateTotalWithDiscount() {
    const currentTotalRS = parseFloat(totalAmount.innerText);
    const discountPercentage = parseFloat(document.getElementById("discountPercentage").value);

    if (!isNaN(discountPercentage)) {
        const discountAmount = (discountPercentage / 100) * currentTotalRS;
        const totalWithDiscount = currentTotalRS - discountAmount;
        return totalWithDiscount.toFixed(2);
    }

    return currentTotalRS.toFixed(2);
}

// Function to print the invoice on a billing slip size with discount
window.printInvoice = function() {
    const invoiceWindow = window.open('', '', 'width=80mm,height=150mm'); // Set the size as per your billing slip
    invoiceWindow.document.write('<html><head><title>Invoice</title></head><body>');
    invoiceWindow.document.write('<table>');
    invoiceWindow.document.write('<thead><tr style="text-align:left; font-size:12px"><th>Product</th><th>Price</th></tr></thead>');
    invoiceWindow.document.write('<tbody>');

    // Iterate through the invoice table and add rows to the print window
    const rows = invoiceTable.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const columns = rows[i].getElementsByTagName('td');
        if (columns.length === 2) {
            const productName = columns[0].innerText;
            const productPrice = columns[1].innerText;
            invoiceWindow.document.write(`<tr><td style="width:100px; font-size:12px">${productName}</td><td style="font-size:12px">${productPrice}</td></tr>`);
        }
    }

    invoiceWindow.document.write('</tbody>');
    invoiceWindow.document.write('<tfoot>');
    invoiceWindow.document.write(`<tr><td>Total:</td><td>${calculateTotalWithDiscount()}</td></tr>`);
    invoiceWindow.document.write('</tfoot>');
    invoiceWindow.document.write('</table>');
    invoiceWindow.document.write('</body></html>');

    // Close the print window after printing
    invoiceWindow.print();
    invoiceWindow.close();
    // Clear invoice data function
    clearInvoice();
};

// Function to clear the invoice data
function clearInvoice() {
    const invoiceTable = document.getElementById("invoiceTable");
    while (invoiceTable.firstChild) {
        //  console.log("1", invoiceTable.removeChild(invoiceTable.firstChild));
        invoiceTable.removeChild(invoiceTable.firstChild)
    }

    const totalAmount = document.getElementById("totalAmount");
    totalAmount.innerText = "0.00";

    // Clear the discount input if visible
    const discountInput = document.getElementById("discountInput");
    discountInput.style.display = "none";
    document.getElementById("discountPercentage").value = "";

    sumIsZero(0);
}

// Function to delete the row and total 
function clearInvoice1() {
    const invoiceTable = document.getElementById("invoiceTable");
    // Add event listeners to each row
    const rows = invoiceTable.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener("click", function() {
            // Get the price from the clicked row
            const priceCell = this.cells[i];
            const priceText = priceCell.innerText;
            const numericPriceText = priceText.replace(/[^0-9.]/g, ''); // Remove non-numeric characters and convert to a float           
            const price = parseFloat(numericPriceText.trim()); // Trim whitespace and parse
            console.log(price);

            // Recalculate the total amount
            const currentTotalRS = parseFloat(totalAmount.innerText);
            console.log(currentTotalRS);
            const newTotalRS = currentTotalRS - price;
            console.log(newTotalRS);
            console.log(currentTotalRS, " ", price, "", newTotalRS);
            totalAmount.innerText = newTotalRS.toFixed(2);
            
            // Remove the clicked row
            invoiceTable.removeChild(this);
        });   
    }
}