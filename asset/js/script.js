const cacheKey1 = 'NUMBER1';
if (typeof (Storage) !== 'undefined') 
{
    if (sessionStorage.getItem(cacheKey1) === 'undefined') 
    {
        sessionStorage.setItem(cacheKey1, 0);
    }
    
    const vote1 = document.querySelector('#vote1');
    const count1 = document.querySelector('#count1');
    vote1.addEventListener('click', function (event) 
    {
        let number = sessionStorage.getItem(cacheKey1);
        number++;
        sessionStorage.setItem(cacheKey1, number);
        count1.innerText = sessionStorage.getItem(cacheKey1);
    });
} 
else 
{
    alert('Browser tidak mendukung Web Storage');
}


const cacheKey2 = 'NUMBER2';
if (typeof (Storage) !== 'undefined') 
{
    if (sessionStorage.getItem(cacheKey2) === 'undefined') 
    {
        sessionStorage.setItem(cacheKey2, 0);
    }
    
    const vote2 = document.querySelector('#vote2');
    const count2 = document.querySelector('#count2');
    vote2.addEventListener('click', function (event) 
    {
        let number = sessionStorage.getItem(cacheKey2);
        number++;
        sessionStorage.setItem(cacheKey2, number);
        count2.innerText = sessionStorage.getItem(cacheKey2);
    });
} 
else 
{
    alert('Browser tidak mendukung Web Storage');
}


const cacheKey3 = 'NUMBER3';
if (typeof (Storage) !== 'undefined') 
{
    if (sessionStorage.getItem(cacheKey3) === 'undefined') 
    {
        sessionStorage.setItem(cacheKey3, 0);
    }
    
    const vote3 = document.querySelector('#vote3');
    const count3 = document.querySelector('#count3');
    vote3.addEventListener('click', function (event) 
    {
        let number = sessionStorage.getItem(cacheKey3);
        number++;
        sessionStorage.setItem(cacheKey3, number);
        count3.innerText = sessionStorage.getItem(cacheKey3);
    });
} 
else 
{
    alert('Browser tidak mendukung Web Storage');
}