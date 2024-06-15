import { BsStar, BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import useRoom from '../../../hooks/useRoom';
import convertToPersianDate from '../../../utilities/convertToPersianDate';

function RoomComments() {
  const { id } = useParams();
  const { room } = useRoom(Number(id));

  if (!room) return null;
  return (
    <div className="mt-5" id="hostRef">
      <h4 className="mb-3 font-vazirBold text-lg">
        <span className="font-vazirBold text-lg">
          نظر مهمانان{' '}
          {room?.comments?.length && (
            <small className="font-persianNums text-sm">
              ( {room?.comments?.length} نظر )
            </small>
          )}
        </span>
      </h4>
      {room?.comments?.length ? (
        room?.comments?.map((comment, index) => (
          <div key={index} className="my-5">
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <img
                  alt=""
                  src={comment.avatar}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="flex flex-col gap-2">
                  <div className="font-vazirBold text-base">{comment.user}</div>
                  <span className="font-persianNums text-[12px] text-gray-400">
                    {comment.created_at &&
                      convertToPersianDate(comment.created_at)}
                  </span>
                </div>
              </div>
              <Rating
                initialRating={comment.rating}
                fullSymbol={<BsStarFill />}
                emptySymbol={<BsStar />}
                readonly={true}
                className="text-yellow-400"
              />
            </div>
            <p className="mt-5 text-sm leading-6 text-gray-700 dark:text-gray-400">
              {comment.comment}
            </p>
            {comment.response && (
              <div className="mr-5 mt-3 rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      alt=""
                      src={room?.host?.profile}
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <div className="font-vazirMedium">پاسخ میزبان</div>
                      <span className="font-persianNums text-[12px] text-gray-400">
                        {comment.response.created_at &&
                          convertToPersianDate(comment.response.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-200">
                  {comment.response.comment}
                </p>
              </div>
            )}
            {room.comments && index + 1 < room.comments.length && (
              <div className="my-5 h-[1px] w-full bg-gray-100"></div>
            )}
          </div>
        ))
      ) : (
        <div className="mt-5 text-gray-500">
          هیچ دیدگاهی برای این اقامتگاه ثبت نشده است.
        </div>
      )}
      <div className="my-5 h-[1px] w-full bg-gray-200"></div>
    </div>
  );
}

export default RoomComments;
