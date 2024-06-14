import Footer from '../../components/footer'
import Header from '../../components/header'
import RestaurantList from '../../components/list-restaurant'
const Home = () => {
  return (
    <>
      <Header $isprofilepage="home" />
      <RestaurantList />
      <Footer />
    </>
  )
}

export default Home
