// docs: https://jobicy.com/jobs-rss-feed
// website example: https://react-demo.tailadmin.com/

const url = "https://jobicy.com/api/v2/remote-jobs";
// ---=== If you want to add filters, you can add them here: ===---
// let count = null;
// let geo = null;
// let industry = null;
// let tag = null;
// if (count) {
//     url += `&count=${count}`;
// }
// if (geo) {
//     url += `&geo=${geo}`;
// }
// if (industry) {
//     url += `&industry=${industry}`;
// }
// if (tag) {
//     url += `&tag=${tag}`;
// }

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // option.series[0].data = salaryMin;
        // option.series[1].data = salaryMax;

        console.log(data.jobs.length);
        console.log(data.jobs);

        let salaryMin = data.jobs.filter(job => job.annualSalaryMin).map(job => job.annualSalaryMin);
        let salaryMax = data.jobs.filter(job => job.annualSalaryMax).map(job => job.annualSalaryMax);
        let jobGeo = data.jobs.filter(job => job.jobGeo).map(job => job.jobGeo);
        console.log(salaryMin.length);
        console.log(salaryMax.length);
        console.log(salaryMin);
        console.log(salaryMax);
        console.log(jobGeo);

    })
    .catch((error) => console.error("Error:", error));



// Results:
// min = ["50000", "77400", "148800", "150000", "150000", "140000", "59000", "79800", "69000", "175000", "130000", "67500", "113000"]
// max = ["116200", "202700", "190000", "180000", "160000", "87000", "99750", "88000", "215000", "182000", "79000", "150000"]