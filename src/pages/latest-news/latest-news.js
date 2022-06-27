import { useSelector, useDispatch } from "react-redux";
import News from "../../components/news/news";
import store from "../../redux/store";

const LatestNews = () => {
  const { latestNews } = useSelector(store => store?.news || {});
  const { latestNewsError } = useSelector(store => store?.errors || {});
  const { isLoadingData } = useSelector(store => store?.loader || {})

  return (
    <div>
      {isLoadingData ?
        <h3>Lading...</h3> :
        <News news={latestNews} error={latestNewsError} title="Latest News" />
      }

    </div>
  );
};

export default LatestNews;
