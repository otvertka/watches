import WatchSlider from "@/components/WatchSlider";
import { allWatches } from "@/data/watches";
import ActionButton from "@/shared/ActionButton";
import { Link, useParams } from "react-router-dom";

const WatchDetailPage = () => {
  const { watchId } = useParams();
  const item = allWatches.find((w) => w.id === watchId);

  if (!item) return <p>Not found</p>;

  return (
    <section className="mt-36 w-5/6 mx-auto">

      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 gap-10">
        
        {/* LEFT — SLIDER */}
        <div className="w-full">
          <WatchSlider mainImage={item.mainImage} images={item.images} />
        </div>

        {/* RIGHT — INFO */}
        <div className="info space-y-4">
          <h2 className="text-3xl font-semibold text-gray-400">{item.brand}</h2>
          <h3 className="text-2xl text-gray-300">{item.model}</h3>

          <div className="text-xl font-semibold text-white">
            CHF {item.price.toLocaleString()}
          </div>

          <p className="text-gray-400">{item.description}</p>

          {/* DETAILS */}
          <div className="mt-6 text-gray-500">
            <h2>DETAILS</h2>
            <ul className="space-y-1">
              <li><strong>Mouvement:</strong> {item.details.movement}</li>
              <li><strong>Case:</strong> {item.details.case}</li>
              <li><strong>Bracelet:</strong> {item.details.braceletType}</li>
              <li><strong>Year:</strong> {item.details.year}</li>
              <li><strong>Condition:</strong> {item.details.condition}</li>
              <li><strong>Box:</strong> {item.details.box ? "Yes" : "No"}</li>
              <li><strong>Warranty:</strong> {item.details.warranty ? "Yes" : "No"}</li>
              <li><strong>Diameter:</strong> {item.details.diameter} mm</li>
              <li><strong>Reference:</strong> {item.details.reference}</li>
            </ul>
          </div>

            <div>

          <ActionButton className="mt-6">Contact us</ActionButton>
            </div>
        </div>

      </div>


      <p className="mt-32">
        <Link to=".." relative="path">Back to Watches</Link>
      </p>

    </section>
  );
};

export default WatchDetailPage;