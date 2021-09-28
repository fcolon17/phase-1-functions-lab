function distanceFromHqInBlocks(block) {
  if (block < 42) return 42 - block;
  return block - 42;
}
function distanceFromHqInFeet(_block) {
  if (_block < 42) return (42 - _block) * 264;
  return (_block - 42) * 264;
}
function distanceTravelledInFeet(_block1, _block2) {
  if (_block1 > _block2) return (_block1 - _block2) * 264;
  return (_block2 - _block1) * 264;
}
function calculatesFarePrice(_start, _destination) {
  let distance = distanceTravelledInFeet(_start, _destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return 2.56;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
  // if (_destination - _start >= 8) return 25;
  // if (_destination - _start <= -2) return 2.56;
  // if (_destination <= 24) return "cannot travel that far";
  // return _start + 1 - _destination;
}
