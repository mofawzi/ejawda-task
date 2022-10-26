import { FormattedMessage } from "react-intl";
import "./Establishment.scss";

const Establishment = (props) => {
    const toggleFavourite = () => {
        props.onToggleFavourite(props.item);
    };

    return (
        <section className="record-card d-block card p-15 mb-25">
            <header className="record-card__header d-flex justify-content-between">
                <div className="record-card__heading">
                    <h3 className="mb-10 fw-bolder fs-5">{props.item.name}</h3>
                    <span className="record-card__badge badge bg-success mx-5 py-10">
                        <span>
                            <FormattedMessage id="recordStatus" defaultMessage="حالة السجل" /> : {" "}
                        </span>
                        <span>
                            <FormattedMessage id={props.item.status} />
                        </span>
                    </span>
                    <span className="record-card__badge badge bg-success py-10">
                        <span>
                            <FormattedMessage id="recordType" defaultMessage="نوع السجل" /> : {" "}
                        </span>
                        <span>
                            <FormattedMessage id={props.item.type} />
                        </span>
                    </span>
                </div>
                <div className="record-card-controls">
                    <button
                        className={`btn btn-outline-info mx-5 record-card-fav-btn ${props.item.isFavorite && "active"
                            }`}
                        disabled={props.item.isDeleted}
                        onClick={toggleFavourite}
                    >
                        <i className="bi bi-star"></i>
                    </button>
                    <div className="btn-group record-card__edit-btn">
                        <button
                            className="btn btn-outline-info"
                            type="button"
                            id="defaultDropdown"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="true"
                            aria-expanded="false"
                        >
                            <i className="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul
                            className="dropdown-menu py-10"
                            aria-labelledby="defaultDropdown"
                        >
                            <li>
                                <a className="dropdown-item py-3 px-10" href="/#">
                                    <FormattedMessage
                                        id="editRecord"
                                        defaultMessage="Edit record"
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item py-3 px-10" href="/#">
                                    <FormattedMessage
                                        id="renewRecord"
                                        defaultMessage="Renew record"
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item py-3 px-10" href="/#">
                                    <FormattedMessage
                                        id="cancelRecord"
                                        defaultMessage="Cancel record"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <body>

            </body>

            <button className="btn btn-outline-info btn-lg card-btn">
                <FormattedMessage id="viewRecord" defaultMessage="عرض وادارة السجل" />
            </button>
        </section>
    );
};

export default Establishment;