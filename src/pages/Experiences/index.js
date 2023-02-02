import './Experiences.css';
import ExperiencesList from './ExperiencesList';
import Filter from './Filter'
import SearchBar from '../../components/ui/SearchBar'

export default function Experiences() {

   return (
      <div className="experiences">
         <h1 className="experiences-title">U-Experiences</h1>
         <SearchBar />
         <Filter />
         <ExperiencesList />
      </div>
   )
}
