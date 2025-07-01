interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string;
  image: string;
}

export function TeamMember({ name, role, expertise, image }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {name}
        </h3>
        <p className="text-blue-600 font-medium mb-2">
          {role}
        </p>
        <p className="text-gray-600 text-sm">
          {expertise}
        </p>
      </div>
    </div>
  );
}