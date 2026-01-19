
import Card from "./components/Card";
const App = () =>
{
const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$60/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://static01.nyt.com/images/2021/11/09/business/00meta-logo-grid-2/00meta-logo-grid-2-mobileMasterAt3x.jpg?auto=webp&quality=90",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$50/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$42/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$70/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://s3-alpha.figma.com/hub/file/2747494711/31b6ad5c-b404-4086-a685-89b1d5294f1c-cover.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$55/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$48/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.nvidia.com/content/nvidiaGDC/us/en_US/about-nvidia/legal-info/logo-brand-usage/_jcr_content/root/responsivegrid/nv_container_392921705/nv_container/nv_image.coreimg.100.1070.png/1703060329053/nvidia-logo-vert.png",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$75/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf_k03KRdC4NkZaZ5esQz8sGlxwBJ-xX9sw&s",
    companyName: "Oracle",
    datePosted: "6 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$52/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png",
    companyName: "Salesforce",
    datePosted: "2 weeks ago",
    post: "Platform Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    payPerHour: "$65/hour",
    location: "Remote, India"
  }
];


  return (
    <div className="parent">
      {jobOpenings.map(function(val,indx){
        return (
          <div key={indx}>
             <Card company={val.companyName} post={val.post} datePosted={val.datePosted} tag1={val.tag1}
         tag2={val.tag2} Logo={val.brandLogo} pay={val.payPerHour} location= {val.location}/>
          </div>
        )
      })}
    

    </div>
  )
}

export default App;