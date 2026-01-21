import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Header from "../Common/Header";


export default function CardsTable() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedCard, setSelectedCard] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this card?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "cards", id));

            // UI se bhi remove karo (without refresh)
            setCards(cards.filter(card => card.id !== id));

            alert("Card deleted successfully!");
        } catch (error) {
            console.error("Error deleting card:", error);
        }
    };

    const [editData, setEditData] = useState({
        name: "",
        type: "",
        price: "",
        img: "",
    });
    const handleUpdate = async () => {
        try {
            await updateDoc(doc(db, "cards", selectedCard.id), {
                name: editData.name,
                type: editData.type,
                price: editData.price,
                img: editData.img,
            });

            // UI update
            setCards(cards.map(card =>
                card.id === selectedCard.id
                    ? { ...card, ...editData }
                    : card
            ));

            alert("Card updated successfully!");
        } catch (error) {
            console.error("Error updating card:", error);
        }
    };





    useEffect(() => {
        const fetchCards = async () => {
            const snapshot = await getDocs(collection(db, "cards"));
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCards(data);
            setLoading(false);
        };

        fetchCards();
    }, []);

    if (loading) return <h3>Loading...</h3>;

    return (
        <div>

            <Header />

          <div className="container py-5">
  {/* Header Buttons */}
  <div className="row mb-4">
    <div className="col-6 d-flex">
      <Link
        to="/view"
        className="btn btn-primary flex-grow-1 me-2 shadow-sm"
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          borderRadius: "0.5rem",
          fontWeight: "500",
        }}
      >
        View Cards
      </Link>
    </div>
    <div className="col-6 d-flex justify-content-end">
      <Link
        to="/add"
        className="btn btn-success flex-grow-1 ms-2 shadow-sm"
        style={{
          background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
          borderRadius: "0.5rem",
          fontWeight: "500",
        }}
      >
        Add Card
      </Link>
    </div>
  </div>

  {/* Responsive Table */}
  <div className="table-responsive">
    <table className="table table-borderless table-hover align-middle text-center shadow-sm rounded overflow-hidden">
      <thead className="bg-dark text-white">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {cards.map(card => (
          <tr
            key={card.id}
            className="align-middle"
            style={{
              background: "#fff",
              transition: "transform 0.2s, box-shadow 0.2s",
              borderBottom: "1px solid #eee",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <td>
              <img
                src={card.img}
                alt={card.name}
                width="130"
                height="130"
                className="rounded shadow-sm"
                style={{ objectFit: "cover" }}
              />
            </td>
            <td className="fw-semibold">{card.name}</td>
            <td>{card.type}</td>
            <td className="fw-bold text-primary">₹{card.price}</td>
            <td className="d-flex justify-content-center gap-2 flex-wrap">
              {/* View Button */}
              <button
                className="btn btn-primary btn-sm text-white px-3 py-2 rounded shadow-sm d-flex align-items-center gap-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setSelectedCard(card)}
                style={{
                  background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <i className="bi bi-eye"></i> View
              </button>

              {/* Edit Button */}
              <button
                className="btn btn-success btn-sm text-white px-3 py-2 rounded shadow-sm d-flex align-items-center gap-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal-1"
                onClick={() => {
                  setSelectedCard(card);
                  setEditData({
                    name: card.name,
                    type: card.type,
                    price: card.price,
                    img: card.img,
                  });
                }}
                style={{
                  background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <i className="bi bi-pencil-square"></i> Edit
              </button>

              {/* Delete Button */}
              <button
                className="btn btn-danger btn-sm text-white px-3 py-2 rounded shadow-sm d-flex align-items-center gap-1"
                onClick={() => handleDelete(card.id)}
                style={{
                  background: "linear-gradient(135deg, #f85032 0%, #e73827 100%)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <i className="bi bi-trash"></i> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body text-center">
                            {selectedCard ? (
                                <>
                                    <img
                                        src={selectedCard.img}
                                        alt={selectedCard.name}
                                        width="100%"
                                        height="200"
                                        className="mb-3"
                                    />
                                    <h4>{selectedCard.name}</h4>
                                    <p><b>Type:</b> {selectedCard.type}</p>
                                    <p><b>Price:</b> ₹{selectedCard.price}</p>
                                </>
                            ) : (
                                <p>No data selected</p>
                            )}
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit Modal */}
            <div className="modal fade" id="exampleModal-1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            {selectedCard && (
                                <>
                                    <input
                                        className="form-control mb-2"
                                        placeholder="Name"
                                        value={editData.name}
                                        onChange={(e) =>
                                            setEditData({ ...editData, name: e.target.value })
                                        }
                                    />

                                    <input
                                        className="form-control mb-2"
                                        placeholder="Type"
                                        value={editData.type}
                                        onChange={(e) =>
                                            setEditData({ ...editData, type: e.target.value })
                                        }
                                    />

                                    <input
                                        type="number"
                                        className="form-control mb-2"
                                        placeholder="Price"
                                        value={editData.price}
                                        onChange={(e) =>
                                            setEditData({ ...editData, price: e.target.value })
                                        }
                                    />

                                    <input
                                        className="form-control mb-2"
                                        placeholder="Image URL"
                                        value={editData.img}
                                        onChange={(e) =>
                                            setEditData({ ...editData, img: e.target.value })
                                        }
                                    />

                                    <div className="row">
                                        <div className="col-12">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={handleUpdate}
                                                data-bs-dismiss="modal"
                                            >
                                                Update
                                            </button>

                                        </div>
                                    </div>
                                </>
                            )}
                        </div>


                    </div>
                </div>
            </div>
            {/* <div className="modal-body">
                {selectedCard && (
                    <>
                        <input
                            className="form-control mb-2"
                            placeholder="Name"
                            value={editData.name}
                            onChange={(e) =>
                                setEditData({ ...editData, name: e.target.value })
                            }
                        />

                        <input
                            className="form-control mb-2"
                            placeholder="Type"
                            value={editData.type}
                            onChange={(e) =>
                                setEditData({ ...editData, type: e.target.value })
                            }
                        />

                        <input
                            type="number"
                            className="form-control mb-2"
                            placeholder="Price"
                            value={editData.price}
                            onChange={(e) =>
                                setEditData({ ...editData, price: e.target.value })
                            }
                        />

                        <input
                            className="form-control mb-2"
                            placeholder="Image URL"
                            value={editData.img}
                            onChange={(e) =>
                                setEditData({ ...editData, img: e.target.value })
                            }
                        />

                        <div className="row">
                            <div className="col-12">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleUpdate}
                                    data-bs-dismiss="modal"
                                >
                                    Update
                                </button>

                            </div>
                        </div>
                    </>
                )}
            </div> */}


        </div>
    );



}
