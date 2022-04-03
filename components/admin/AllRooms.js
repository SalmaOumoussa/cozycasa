import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Table from "react-tailwind-table";

import { MDBDataTable } from "mdbreact";
import { SyncOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { getAdminRooms, deleteRoom } from "../../redux/actions/roomActions";
import { DELETE_ROOM_RESET } from "../../redux/constants/roomConstants";

const AllRooms = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error, rooms } = useSelector((state) => state.allRooms);
  const { error: deleteError, isDeleted } = useSelector((state) => state.room);

  useEffect(() => {
    dispatch(getAdminRooms());

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      router.push("/admin/rooms");
      dispatch({ type: DELETE_ROOM_RESET });
    }
  }, [dispatch, deleteError, isDeleted]);

  const data = {
    columns: [
      {
        label: "Room ID",
        field: "id",
        sort: "asc",
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Price / Night",
        field: "price",
        sort: "asc",
      },
      {
        label: "Category",
        field: "category",
        sort: "asc",
      },
      {
        label: "Actions",
        field: "actions",
        sort: "asc",
      },
    ],
    rows: [],
  };

  rooms &&
    rooms.forEach((room) => {
      data.rows.push({
        id: room._id,
        name: room.name,
        price: `$${room.pricePerNight}`,
        category: room.category,
        actions: (
          <>
            <Link href={`/admin/rooms/${room._id}`}>
              <EditOutlined />
            </Link>

            <button
              className="btn btn-danger mx-2"
              onClick={() => deleteRoomHandler(room._id)}
            >
              <DeleteOutlined />
            </button>
          </>
        ),
      });
    });

  const deleteRoomHandler = (id) => {
    dispatch(deleteRoom(id));
  };
  return (
    <>
      <div className="container container-fluid">
        {loading ? (
          <SyncOutlined spin />
        ) : (
          <>
            <h1 className="my-5">
              {`${rooms && rooms.length} Rooms`}

              <Link href="/admin/rooms/new">
                <a className="mt-0 btn text-white float-right new-room-btn">
                  Create Room
                </a>
              </Link>
            </h1>

            {/* <MDBDataTable
              data={setRooms()}
              className="px-3"
              bordered
              striped
              hover
            /> */}
            <div className="mx-12">
              <Table
                columns={data.columns}
                rows={data.rows}
                per_page={5}
                table_header="My Rooms"
                should_export={false}
                className="mx-9 bg-red-900"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllRooms;
